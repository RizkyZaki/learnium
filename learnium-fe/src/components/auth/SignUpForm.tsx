"use client";

export default function SignUpForm() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4">Buat Akun</h1>
      <p className="text-sm text-gray-400 mb-6">
        Sudah punya akun sebelumnya?{" "}
        <a href="/auth/login" className="text-purple-500 hover:underline">
          Sign in
        </a>
      </p>
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Nama Depan"
            className="w-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Nama Belakang"
            className="w-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
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
          <input type="checkbox" id="terms" className="w-4 h-4" />
          <label htmlFor="terms" className="text-sm text-gray-400">
            Saya setuju dengan syarat dan ketentuan yang berlaku
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
        >
          Gabung sekarang
        </button>
      </form>
    </div>
  );
}
