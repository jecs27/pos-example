'use client';
import { TextInput } from '@tremor/react';
import Image from 'next/image';
import { login } from '../api/users';
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

const BackgroundImage = () => (
  <div className="absolute inset-0">
    <Image
      src="/background.png"
      alt="Imagen"
      layout="fill"
      objectFit="cover"
      objectPosition="right center"
      className="w-full h-full"
    />
  </div>
);

export default function Login() {
  setCookie('token_pos', 'token_bearer_test', { secure: true });
  const router = useRouter();
  const makeLogin = async () => {
    // const dataResponse = await login('user', 'password');
    // console.log(dataResponse);
    router.push('/')
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 relative">
        <BackgroundImage />
      </div>

      <div className="w-2/3 flex items-center justify-center px-4 py-10 lg:px-6">
        <div className="w-full max-w-md">
          <h3 className="text-tremor-title font-bold">
            Hola Bienvenido!
          </h3>
          <div className="space-y-3">
            <TextInput
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Usuario"
            />
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
            <div className="flex justify-between">
              <a href="#" className="text-tremor-brand hover:underline">
                Olvidaste tu contraseña?
              </a>
            </div>
            <button
              type="button"
              onClick={makeLogin}
              className="w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-brand-inverted"
              style={{ backgroundColor: '#95AFBE' }}
            >
              Log in
            </button>
            <div className="text-center">
              <span className="text-tremor-default">No tienes cuenta?</span>{' '}
              <a href="/contacto" className="text-tremor-brand hover:underline">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}