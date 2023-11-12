import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SigninValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"




const SigninForms = () => {
  const { toast } = useToast()
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();


  //Form definition 
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const { mutateAsync: signInAccount } = useSignInAccount();


  //Submit handler
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    try { 

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if(!session) {
      return toast({ title: 'Sign in failed, Please try again.' })
    }

    const isLoggedIn = await checkAuthUser();


    if(isLoggedIn) {
      form.reset();

      navigate('/')
    } else {
      return toast({ title: 'Sign up failed. Please try again.' })
    }} catch (error) {
      console.log({ error })
    }

  }


  return (
    <Form {...form} >
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo2.svg" alt="logo" />

        <h2 className="h3-bold md:h2-bold pt-1 sm:pt-12">Log in to your account</h2>
        <p className="text-light-3 small-medium md:base-regular mtp-2">Welcome back, kindly enter your details</p>
      


        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isUserLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading...
              </div>
            ): "Sign in"}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account? <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1" >Sign up</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForms