import {FormEvent} from 'react';
import './AddTodoForm.css';

type Props = {
  onSubmit(subject: string, body:string): void;
};

export default function AddTodoForm({onSubmit}: Props) {
  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // event.target (originally triggered the event)
    // event.currentTarget (has the event listener)

    const form = event.currentTarget;
    const data = new FormData(form);
    const bodyValue = data.get('body') as string;
    const subjectValue = data.get('subject') as string;

    onSubmit(bodyValue, subjectValue);

    form.reset();
  }

  return (
    <form className="AddTodoForm" onSubmit={onFormSubmit}>
      <input className="AddTodoForm-input" name="subject" />
      <input className="AddTodoForm-input" name="body" />
      <button className="AddTodoForm-button">Submit</button>
    </form>
  );
}
