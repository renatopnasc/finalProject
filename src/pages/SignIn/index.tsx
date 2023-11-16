import { NavLink } from "react-router-dom";
import {
  Input,
  InputFormContainer,
  FormButton,
  FormContainerSignIn,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newSignInFormValidationSchema = zod.object({
  email: zod.string().email("Email inválido."),
  password: zod.string().min(6, "A senha deve conter pelo menos 6 char."),
});

type SignInFormData = zod.infer<typeof newSignInFormValidationSchema>;

export function SignIn() {
  const signInForm = useForm({
    resolver: zodResolver(newSignInFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, watch, handleSubmit, reset } = signInForm;

  function handleSignIn(data: SignInFormData) {
    console.log(data);
    reset();
  }

  const email = watch("email");
  const password = watch("password");

  const isSubmitDisabled = !(email && password);

  return (
    <FormContainerSignIn onSubmit={handleSubmit(handleSignIn)} action="">
      <h1>Faça login</h1>
      <InputFormContainer>
        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          id="email"
          {...register("email")}
        />
      </InputFormContainer>

      <InputFormContainer>
        <label htmlFor="password">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          id="password"
          {...register("password")}
        />
      </InputFormContainer>

      <FormButton disabled={isSubmitDisabled} type="submit">
        Entrar
      </FormButton>

      <NavLink to="/register">Criar uma conta</NavLink>
    </FormContainerSignIn>
  );
}
