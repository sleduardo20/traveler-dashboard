import zod from 'zod';

export const signInFormSchema = zod.object({
  email: zod
    .string()
    .min(1, 'Field is required')
    .email('Invalid email')
    .nonempty('Field is required'),
  password: zod.string().nonempty('Field is required'),
});

export type SignInFormProps = zod.infer<typeof signInFormSchema>;
