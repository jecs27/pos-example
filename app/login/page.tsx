'use client';
import { TextInput } from '@tremor/react';
import Image from 'next/image';
import { login } from '../api/users';

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
  const makeLogin = () => {
    login('user', 'password');
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 relative">
        <BackgroundImage />
      </div>

      <div className="w-1/2 flex items-center justify-center px-4 py-10 lg:px-6">
        <div className="w-full max-w-md">
          <h3 className="text-center text-tremor-title font-semibold mb-6">
            Hola Bienvenido!
          </h3>
          <div className="space-y-6">
            <label
              htmlFor="email"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Usuario
            </label>
            <TextInput
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder=""
              className="mt-2"
            />
            <label
              htmlFor="email"
              className="text-tremor-default font-medium text-tremor-content-strong"
            >
              Contraseña
            </label>
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder=""
              className="mt-2"
            />
            <button
              type="button"
              onClick={makeLogin}
              className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-brand-inverted"
              style={{ backgroundColor: '#95AFBE' }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}