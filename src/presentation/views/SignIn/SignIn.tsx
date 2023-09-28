import Image from 'next/image';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { SignInFormProps, signInFormSchema } from './signInFormSchema';
import { styled } from '../../styles';
import { InputSingIn } from '../../components/Input';
import { InputCheckbox } from '../../components/Checkbox';
import { CommonButton } from '../../components/Buttons';
import { FormAlert } from '../../components/FormAlert';
import { useEffect } from 'react';
import { Notification } from '../../components/Notification/Notification';

export interface SignInProps {
  imageUrl: string;
}

export const SignIn = ({ imageUrl }: SignInProps) => {
  const methods = useForm<SignInFormProps>({
    resolver: zodResolver(signInFormSchema),
  });

  const {
    formState: { errors, isValid, isValidating },
  } = methods;

  console.log(errors);

  useEffect(() => {
    if (errors.email?.message) {
      Notification.error(errors.email.message);
    }

    if (errors.password?.message) {
      Notification.error(errors.password.message);
    }
  }, [errors]);

  const signIn = (data: SignInFormProps) => console.log(data);

  return (
    <SignInContainer>
      <ImageSection>
        <Image
          alt="Image SignIn"
          src={imageUrl}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </ImageSection>
      <FormSection>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(signIn)}>
            <h1>Fazer login</h1>

            <InputSingIn name="email" placeholder="Email" />
            <InputSingIn
              name="password"
              variant="isPassword"
              placeholder="Senha"
            />

            <Row>
              <InputCheckbox name="remember" label="Lembrar-me" />
              <Link href="/">Esqueci minha senha</Link>
            </Row>

            <CommonButton
              size="large"
              type="submit"
              text="Acessar plataforma"
            />

            <FormAlert text="Acesso restrito à sócios e moderadores" />
          </Form>
        </FormProvider>
      </FormSection>
    </SignInContainer>
  );
};

const SignInContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
});

const ImageSection = styled('section', {
  position: 'relative',
  width: '50vw',
  height: '100vh',
});

const FormSection = styled('section', {
  flex: 1,
  height: '100vh',
  padding: '3.6rem 14rem 16rem ',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Form = styled('form', {
  display: 'flex',
  maxWidth: '41.6rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',

  h1: {
    fontSize: '$lg',
    color: '$textTitle',
    marginBottom: '$xxlg',
  },

  a: {
    textDecoration: 'none',
    fontSize: '$sm',
    color: '$textComplements',
    lineHeight: '$md',
  },

  button: {
    marginBottom: '8rem',
  },
});

const Row = styled('div', {
  width: '100%',
  marginTop: '$md',
  marginBottom: '$lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
