'use client';
import img from '../../assets/loginImage.jpg';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import { useTranslation } from 'react-i18next';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const navigate = useNavigate();

  // validation form

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { t, i18n } = useTranslation(['login']);

  // if user login then go to the ....

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  //submit fn

  function onSubmit(values: LoginSchema) {
    try {
      console.log('Login data:', values);

      localStorage.setItem('userData', JSON.stringify(values));

      toast.success('Logged in successfully!');
      navigate('/');
    } catch (error) {
      console.error('error', error);
      toast.error('Something went wrong!');
    }
  }

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center bg-white px-6">
        <div className="w-full  min-h-[80vh] p-8 flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-center pb-16 text-3xl font-semibold">
              {t('signIn')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="appearance-none !bg-surface-light-primary !text-gray-900 !placeholder-surface-light-primary !border !border-gray-300 !rounded-2xl p-6 focus-visible:ring-0"
                          placeholder="Username or Email ID"
                          {...field}
                        />
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
                      <FormLabel>{t('password')}</FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none !bg-surface-light-primary !text-gray-900 !placeholder-surface-light-primary !border !border-gray-300 !rounded-2xl p-6 focus-visible:ring-0"
                          type="password"
                          placeholder="Enter Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-[30%] bg-black text-white rounded p-4 transition-all  hover:bg-gray-600 hover:text-surface-light-primary "
                >
                  {t('submit')} <ArrowRight className=" h-9 w-9 text-white" />
                </Button>
              </form>
            </Form>
          </CardContent>
          <ToastContainer />
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:flex items-center justify-center sm:ps-10 bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={img}
            alt="Login visual"
            className="w-[90%] h-[100vh] object-cover rounded-xl shadow-md"
          />
        </div>
        {/*translate*/}
        <div className="mt-4 text-center">
          <div className="flex gap-2 my-4">
            <button
              onClick={() => i18n.changeLanguage('en')}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              English
            </button>
            <button
              onClick={() => i18n.changeLanguage('ar')}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              عربي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
