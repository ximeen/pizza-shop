import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

const signInFormShema = z.object({
  email: z.string().email(),
})

type SignInFormSchema = z.infer<typeof signInFormShema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>()

  async function handleSignIn(data: SignInFormSchema) {
    try {
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação pro seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 ">
        <Button
          variant={'secondary'}
          asChild
          className="absolute right-8 top-8 "
        >
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel!
            </h1>
            <p className="text-sm text-muted-foreground">
              acompanhe suas vendas pelo painel do parceiro.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-4">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
