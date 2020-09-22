import React from "react";
import {useForm, UseFormMethods, SubmitHandler} from "react-hook-form";
import {postData, putData, doDelete, getData} from '../apiUtils/webRequest'

const {Wit, log} = require('node-wit');


const client = new Wit({
    accessToken: 'CCRYRDP6SW7CWRVE5VGUBPH34MIOBYNV',
    logger: new log.Logger(log.DEBUG) // optional
});

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
    <input ref={ref} {...props} />
));

type Option = {
    label: React.ReactNode;
    value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({options, ...props}, ref) => (
        <select ref={ref} {...props}>
            {options.map(({label, value}) => (
                <option value={value}>{label}</option>
            ))}
        </select>
    )
);

type FormProps<TFormValues> = {
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormMethods<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
                                                                                 onSubmit,
                                                                                 children
                                                                             }: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>();
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
    );
};

type FormValues = {
    firstName: string;
    lastName: string;
    choose: string;
};

const demoURL = "http://localhost:3001";

async function waitForData() {
    try {
        await getData(demoURL).then(data => {
            alert(JSON.stringify(data));
        });
    } catch (err) {
        console.log('fetch failed', err);
    }
}

export default function PersonForm() {

    const onSubmit = (data: FormValues) => {
        alert(JSON.stringify(data));
        console.log(data)
        waitForData();
    };

    return (
        <div>
            <h1>demo form</h1>
            <Form<FormValues> onSubmit={onSubmit}>
                {({errors, register}) => (
                    <>
                        <hr/>
                        <Input name="firstName" ref={register({
                            required: 'this is required',
                            minLength: {
                                value: 2,
                                message: 'Min length is 2',
                            },
                        })}/>{errors.firstName?.message}
                        <Input name="lastName" ref={register({
                            required: 'this is required',
                            minLength: {
                                value: 5,
                                message: 'Min length is 5',
                            },
                        })}/>{errors.lastName?.message}
                        <Select
                            name="choose"
                            ref={register({required: "Choose"})}
                            options={[
                                {label: "One", value: "one"},
                                {label: "Two", value: "two"},
                                {label: "Other", value: "other"}
                            ]}
                        />
                        <br/>
                        <Input type="submit"/>


                        <hr/>
                    </>
                )}
            </Form>
        </div>
    );
}
