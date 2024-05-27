import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getAllWorkers } from '../../lib/cosmic'
import Avatar from '../../components/Avatar'
import { randomUUID } from 'crypto'

export default async function Page() {
    const allWorkers = await getAllWorkers()
    const workers = allWorkers.sort((a, b) => a.metadata.nivel_organigrama - b.metadata.nivel_organigrama);
    const bosses = workers.filter(worker => worker.metadata.nivel_organigrama === 0 || worker.metadata.nivel_organigrama === 1);
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            {/* <Image src="/img/bg4.jpg" width={1920} height={1280} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" /> */}
            {/* FONDO */}
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>

            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>


            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Acerca de nosotros</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-5">
                                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Misión</h3>
                                <p className="mt-4 text-lg leading-8 text-gray-300">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Visión</h3>
                                <p className="mt-4 text-lg leading-8 text-gray-300">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-6 md:gap-y-8 md:gap-x-0">
                            {bosses.map((boss) => (
                                <Avatar key={randomUUID()} worker={boss}></Avatar>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <Link href="#">Puestos abiertos <span aria-hidden="true">&rarr;</span></Link>
                        <Link href="#">Programa de pasantías <span aria-hidden="true">&rarr;</span></Link>
                        <Link href="#">Nuestros valores <span aria-hidden="true">&rarr;</span></Link>
                        <Link href="#">Conoce a nuestro liderazgo <span aria-hidden="true">&rarr;</span></Link>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Oficinas en todo el mundo</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Colegas a tiempo completo</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Horas por semana</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                        </div>
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-300">Tiempo libre remunerado</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Ilimitado</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* ORGANIGRAMA */}
            <div className="p-5 mt-5 mx-4 border  rounded-lg  bg-gray-800 border-gray-700">
                <time className="text-lg font-semibold  text-white">Organigrama de la Empresa</time>
                <ol className="mt-3 divide-y divider-gray-200 divide-gray-700">
                    {workers.map((worker) => (
                        <li key={randomUUID()}>
                            <div className="items-center block p-3 sm:flex  hover:bg-gray-700">
                                <Avatar worker={worker} />
                                <div className="ml-4 text-gray-400">
                                    <div className="text-base font-normal"><span className="font-medium text-white">{worker.title}</span></div>
                                    <div className="text-sm font-normal">{worker.metadata.descripcion}</div>
                                    <span className="inline-flex items-center text-xs font-normal  text-gray-400">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                                        </svg>
                                        {worker.metadata.puesto}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

        </div>
    )
}
