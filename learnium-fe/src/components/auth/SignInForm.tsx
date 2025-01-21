"use client";

export default function SignInForm() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4">Masuk Akun</h1>
      <p className="text-sm text-gray-400 mb-6">
        Belum pernah bergabung dengan kami?{" "}
        <a href="/auth/register" className="text-purple-500 hover:underline">
          Sign up
        </a>
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Masukkan email"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500"
        />
        <div className="relative">
          <input
            type="password"
            placeholder="Masukkan password Anda"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="button"
            className="absolute top-2 right-4 text-gray-400"
          >
            👁️
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label htmlFor="remember" className="text-sm text-gray-400">
            Simpan informasi akun saya
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
        >
          Masuk akun
        </button>
      </form>
    </div>
  );
}
