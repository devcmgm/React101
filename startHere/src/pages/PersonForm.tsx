import React from "react";
import {useForm, UseFormMethods, SubmitHandler} from "react-hook-form";
import '../apiUtils/WaitForRequests'
import {waitForDeleteData, waitForGetData, waitForPostData, waitForPutData} from "../apiUtils/WaitForRequests";
import "./formStyle.css";
const {Wit, log} = require('node-wit');

const client = new Wit({
    accessToken: 'WWEPV7GJEHGK3Y42FCJLFMNWT2GBS4WL',
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
        <select id={'foo'} ref={ref} {...props}>
            {options.map(({label, value}) => (
                <option key={value.toString()} value={value}>{label}</option>
            ))}
        </select>
    )
);

type FormProps<TFormValues> = {
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormMethods<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
                                                                                 onSubmit, children
                                                                             }: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>();
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
    );
};

type FormValues = {
    firstName: string;
    lastName: string;
    choose1: string;
};
const meaning = async (utterance: string) => {

    await client.message(JSON.stringify(utterance), {})
        .then((response: any) => {
            var result = JSON.stringify(response.intents);

            if (result === '[]') {
                result = 'Sorry, I did not understand. Please try again'
            } else {
                result = response.intents[0].name;
            }
           console.log(result);
           alert(result);
        })
        .catch(console.error);

};

export default function PersonForm() {


    const onSubmit = (data: FormValues) => {
        //alert(JSON.stringify(data));
        console.log(data)
          const demoData = JSON.stringify(data.choose1);
        console.log({demoData});
        if (data.choose1 === "get") console.log(waitForGetData());
        if (data.choose1 === "post") console.log(waitForPostData(demoData));
        if (data.choose1 === "put") console.log(waitForPutData(demoData));
        if (data.choose1 === "delete") console.log(waitForDeleteData(demoData));
        if (data.choose1 === "ask") console.log(meaning(data.lastName));
    };

    return (
        <div>
            <h1>demo form</h1>
            <Form<FormValues>   onSubmit={onSubmit}>
                {({errors, register}) => (
                    <>
                        <hr/>
                        <label>Name</label>
                        <Input id={"personFirstName"} name="firstName" ref={register({
                            required: 'this is required',
                            minLength: {
                                value: 2,
                                message: 'Min length is 2',
                            },
                        })}/>{errors.firstName?.message}
                        <label>Question Wit.AI</label>
                        <Input name="lastName" ref={register({
                            required: 'this is required',
                            minLength: {
                                value: 5,
                                message: 'Min length is 5',
                            },
                        })}/>{errors.lastName?.message}
                        <label>Action</label>
                        <Select key={"selectme"}
                            name="choose1"
                            ref={register({ minLength: {
                                    value: 3,
                                    message: 'Choose Something !',
                                },})}
                            options={[
                                {label: "", value: ""},
                                {label: "Get", value: 'get'},
                                {label: "Post", value: "post"},
                                {label: "Put", value: "put"},
                                {label: "Delete", value: "delete"},
                                {label: "ASK", value: "ask"}
                            ]}
                        />{errors.choose1?.message}
                        <br/>
                        <Input type="submit" value={"Do Something"}/>


                        <hr/>
                    </>
                )}
            </Form>
        </div>
    );
}
