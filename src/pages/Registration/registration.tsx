import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './registration.module.scss';
import { useAppDispatch, useAppSelector } from '../../shared/lib/store/redux';
import { register } from '../../entities/table/lib/userSlice';
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    username: yup.string()
        .max(225, 'Ваш пароль должен быть короче 225 символов')
        .required('Никнейм обязателен'),
    email: yup.string().email('Некорректный email').required('Email обязателен'),
    password: yup.string()
        .min(8, 'Ваш пароль должен содержать не менее 8 символов.')
        .max(225, 'Ваш пароль должен быть короче 225 символов')
        .matches(/^(?!.*(\w)\1{2,}).*$/, 'Ваш пароль слишком простой')
        .matches(/^(?![0-9]*$)/, 'Ваш пароль не может быть полностью числовым')
        .required('Пароль обязателен'),
});


export const Registration = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const status = useAppSelector((state) => state.user.statusReg);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    React.useEffect(() => {
        

        if (status == 'succeeded') {
            console.log(status);
            navigate("/login");
            
        }
    }, [status])

    const onSubmit = (event: any) => {
        const obj = {
            username: event.username,
            email: event.email,
            password: event.password
        }
        dispatch(register(obj));
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={sxStyles.container}>
                <Avatar sx={sxStyles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Зарегистрироваться
                </Typography>

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={sxStyles.form}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Nickname"
                                autoComplete="Nickname"
                                autoFocus
                                error={!!errors.username}
                                helperText={errors?.username?.message as string}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                error={!!errors.email}
                                helperText={errors?.email?.message as string}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors?.password?.message as string}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={sxStyles.submitButton}
                    >
                        Зарегестрироваться
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link to="/login">
                                {"Войти"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
};



const sxStyles = {
    container: {
        marginTop: 13,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        m: 1,
        bgcolor: 'secondary.main',
    },
    form: {
        mt: 1,
    },
    submitButton: {
        mt: 3,
        mb: 2,
    },
};
