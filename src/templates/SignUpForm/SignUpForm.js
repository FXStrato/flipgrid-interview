import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './SignUpForm.css';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(
      () =>
        history.push({
          pathname: './confirmation',
          state: data,
        }),
      2000
    );
  };

  return (
    <div className='signup form-box'>
      <h1>
        <span style={{ fontWeight: 500 }}>Let's</span>
        <br />
        Sign Up
      </h1>
      <p>
        Use the form below to sign up for this super awesome service. You're
        only a few steps away!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label htmlFor='firstname'>First Name</label>
          <Input
            className='form-box__input'
            name='firstname'
            id='firstname'
            type='text'
            ref={register({ required: 'First name required' })}
          />
          {errors.firstname && (
            <span className='error-text'>{errors.firstname.message}</span>
          )}
        </p>
        <p>
          <label htmlFor='email'>Email Address</label>
          <Input
            className='form-box__input'
            name='email'
            type='email'
            id='email'
            ref={register({ required: 'Email is required' })}
          />
          {errors.email && (
            <span className='error-text'>{errors.email.message}</span>
          )}
        </p>
        <p>
          <label htmlFor='password'>Password</label>
          <Input
            className='form-box__input'
            name='password'
            type='password'
            id='password'
            ref={register({ required: 'Password is required' })}
          />
          {errors.password && (
            <span className='error-text'>{errors.password.message}</span>
          )}
        </p>
        <div className='align-right'>
          <Button text='Sign Up' type='submit' loading={loading} disabled={loading} />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
