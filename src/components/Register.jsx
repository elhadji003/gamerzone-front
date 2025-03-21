import React from 'react';
import { useForm } from 'react-hook-form';
import gamingSetup from '../assets/images/manette3.png'; // Assure-toi que le chemin est correct
import { Link } from 'react-router-dom';

const Register = ({ onClick }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Register data:", data);
        // Ajoute ta logique de registration ici (API, redirection, etc.)
    };

    return (
        <div className="flex min-h-screen bg-gray-900 overflow-hidden">
            {/* Partie image avec animation */}
            <div className="w-1/2 hidden md:flex items-center justify-center">
                <img
                    src={gamingSetup}
                    alt="Setup Gaming 4K"
                    className="login-image object-contain rotate-45 animate-float shadow-neon-pink"
                    style={{ maxHeight: '500px' }}
                />
            </div>

            {/* Partie formulaire */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
                        <span className="text-pink-500">Inscription</span>
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex gap-4">
                            <div className='w-1/2'>
                                <label className="block text-white font-semibold mb-1">Pseudo</label>
                                <input
                                    type="text"
                                    {...register('pseudo')}
                                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out"
                                    placeholder='Pseudo'
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="block text-white font-semibold mb-1">Username</label>
                                <input
                                    type="text"
                                    {...register('username')}
                                    className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out"
                                    placeholder='Username'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-1">Email</label>
                            <input
                                type="email"
                                {...register('email')}
                                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out"
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white font-semibold mb-1">Genre</label>
                            <select
                                {...register('gender')}
                                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out"
                                required
                            >
                                <option value="" disabled selected>Sélectionner le genre</option>
                                <option value="man">Homme</option>
                                <option value="woman">Femme</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-white font-semibold mb-1">Mot de passe</label>
                            <input
                                type="password"
                                {...register('password')}
                                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 ease-in-out"
                                placeholder='Mot de passe'
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition duration-200 transform hover:scale-105"
                        >
                            Créer le compte
                        </button>
                    </form>
                    <p className="text-gray-400 text-sm mt-6 text-center">
                        Déjà un compte ?{' '}
                        <button onClick={onClick} className="text-pink-500 hover:underline">
                            Se connecter
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
