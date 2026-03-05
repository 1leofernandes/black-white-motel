export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} PRETO & BRANCO MOTEL. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}