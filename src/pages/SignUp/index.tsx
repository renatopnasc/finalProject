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

const signUpFormValidationSchema = zod.object({
  fullName: zod.string().min(3, "Mínimo de 3 letras."),
  email: zod.string().email("Email inválido."),
  password: zod.string().min(6, "Minímo de 6 chars."),
});

type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>;

export function SignUp() {
  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const { watch, handleSubmit, register, reset } = signUpForm;

  const fullName = watch("fullName");
  const email = watch("email");
  const password = watch("password");

  const isSubmitDisabled = !(fullName && email && password);

  function handleSignUp(data: SignUpFormData) {
    console.log(data);
    reset();
  }

  return (
    <FormContainerSignIn onSubmit={handleSubmit(handleSignUp)} action="">
      <h1>Crie sua conta</h1>
      <InputFormContainer>
        <label htmlFor="fullName">Seu nome</label>
        <Input
          placeholder="Exemplo: Maria da Silva"
          type="text"
          id="fullName"
          {...register("fullName")}
        />
      </InputFormContainer>

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
        Criar conta
      </FormButton>

      <NavLink to="/">Já tenho conta</NavLink>
    </FormContainerSignIn>
  );
}
