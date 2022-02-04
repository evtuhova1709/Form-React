import { useForm } from 'react-hook-form';
import classes from './Form.module.css';

const Form = () => {
    const {
        register,

        formState: {
            errors,
        },
        handleSubmit,
        reset

    } = useForm({
        mode: 'onBlur'
    }

    );

    const onSubmit1 = (data) => {
        console.log(JSON.stringify(data));
        let date = Date()
        reset()

    }


    return (
        <form onSubmit={handleSubmit(onSubmit1)} className={classes.mainForm}>
            <div>
                <label>
                    Пароль
                <input className={classes.formInput1}
                        {...register('password', {
                            required: 'Укажите пароль',
                            minLength: {
                                value: 5,
                                message: 'Ваш новый пароль должен содержать не менее 5 символов'
                            }

                        })}
                    />
                </label>
                <div >
                    {errors?.password && <p className={classes.errorName}>{errors?.password?.message || 'Error!'}</p>}
                </div>

            </div>
            <div>
                <label>
                    Пароль еще раз
                <input className={classes.formInput2}
                        {...register('passwordAgain', {
                            required: 'Укажите пароль',
                            minLength: {
                                value: 5,
                                message: 'Повторите пароль,пожалуйста,это обезопасит вас с нами на случай ошибки.'
                            }

                        })}
                    />
                </label>
                <div>
                    {errors?.passwordAgain && <p className={classes.errorName}>{errors?.passwordAgain?.message || 'Error!'}</p>}
                </div>

            </div>
            <hr className={classes.line} />
            <div>
                <label>
                    Электронная почта
                <input className={classes.formInput3}
                        {...register('email', {
                            required: 'Укажите E-mail',
                            minLength: {
                                value: 5,
                                message: 'Можно изменить адрес,указанный при регистрации.'
                            }

                        })}
                    />
                </label>
                <div>
                    {errors?.email && <p className={classes.errorName}>{errors?.email?.message || 'Error!'}</p>}
                </div>
                <div className={classes.agreed}>
                    Я согласен
                    <input className={classes.agreeInput} type="checkbox" id="scales" name="scales" />
                    <label className={classes.agreeLabel} for="scales">принимаю аткуальную информацию на емейл</label>
                </div>

            </div>




            <input className={classes.formBtn} type="submit" value="Изменить" /><span className={classes.labelChanged}>изменено</span>
        </form>


    )
}
export default Form;