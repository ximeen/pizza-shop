import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'

const signUpFormShema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormSchema = z.infer<typeof signUpFormShema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormSchema>()

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpFormSchema) {
    try {
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8 ">
        <Button
          variant={'secondary'}
          asChild
          className="absolute right-8 top-8 "
        >
          <Link to="/sign-in">Entrar no estabelecimento</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-4">
              <Label className="cursor-pointer" htmlFor="managerName">
                Seu nome
              </Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-4">
              <Label className="cursor-pointer" htmlFor="restaurantName">
                Nome do restaurante
              </Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-4">
              <Label className="cursor-pointer" htmlFor="email">
                Seu email
              </Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-4">
              <Label className="cursor-pointer" htmlFor="phone">
                Número
              </Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos termos de{' '}
              <a className="font-semibold" href="/sign-up">
                política
              </a>{' '}
              e{' '}
              <a className="font-semibold" href="/sign-up">
                privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
