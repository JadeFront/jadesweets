import React from 'react'
import { GiCupcake } from "react-icons/gi";
import './Contact.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {
  const schema = yup.object().shape({
    name:
        yup.string().required(<p>name required</p>),
    email: 
        yup.string().email().required(<p>email required</p>),
    message:
        yup.string().required(<p>enter your message</p>),
});

const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
});

const onSubmit = (data) => {
    console.log(data);
};

  return (
    <section className='contact'>
      <div className='contact-container'>
        <div className='contact-intro'>
          <p className='contact-logo'><GiCupcake /></p>
          <h1>JadeSweet's</h1>
          <p>Ilocos Sur Philippines</p>
        </div>

        <div className='contact-content'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
                <p>name:</p>
                <input className='input' type='name' placeholder='Enter Name'
                {...register('name')}/>  
                <p className='error'>{errors.name?.message}</p>
            </div>

            <div className='form-input'>
                <p>email:</p>
                <input className='input' type='email' placeholder='Enter Email'
                {...register('email')}/>
                <p className='error'>{errors.email?.message}</p>
            </div>
            
            <div className='form-input'> 
                <p>message:</p>
                <textarea className='input'  placeholder='Message'
                {...register('message')}/>
                <p className='error'>{errors.message?.message}</p>
            </div>

            

            <input className='btn' type='submit' />
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact