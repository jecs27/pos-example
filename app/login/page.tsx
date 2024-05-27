import { TextInput } from '@tremor/react';
import Image from 'next/image';

const BackgroundImage = () => (
  <div className="w-1/2 relative">
    <div className="absolute inset-0">
      <Image
        src="https://img.freepik.com/free-vector/colorful-abstract-background_23-2148461177.jpg?w=1380&t=st=1714756531~exp=1714757131~hmac=04a229fcf1456de4ea650e4d45399ce58920f37447353715bcab0a0a4830f573"
        alt="Imagen"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
  </div>
);

export default function Login() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center md:flex-row">
        <div className="w-full md:w-1/2 px-4 py-10 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Log in
            </h3>
            <form action="#" method="post" className="mt-6">
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
                placeholder="john@company.com"
                className="mt-2"
              />
              <label
                htmlFor="email"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Contraseña
              </label>
              <TextInput
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="mt-2"
              />
              <button
                type="submit"
                className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="https://i.ibb.co/HF7bsQY/9147451.jpg"
            alt="Imagen"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </>
  );
}