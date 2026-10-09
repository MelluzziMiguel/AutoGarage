export interface UsuarioLogado {
  nome: string
  email: string
}

const SESSION_KEY = 'autogarage:user'

const USUARIO_TEMPORARIO = {
  nome: 'Administrador',
  email: 'admin@autogarage.com',
  senha: 'AutoGarage@123',
}

export function login(
  email: string,
  senha: string,
): UsuarioLogado | null {
  const emailNormalizado = email.trim().toLowerCase()

  if (
    emailNormalizado === USUARIO_TEMPORARIO.email &&
    senha === USUARIO_TEMPORARIO.senha
  ) {
    const usuario: UsuarioLogado = {
      nome: USUARIO_TEMPORARIO.nome,
      email: USUARIO_TEMPORARIO.email,
    }

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify(usuario),
    )

    return usuario
  }

  return null
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY)
}

export function getUsuarioLogado(): UsuarioLogado | null {
  const usuario = localStorage.getItem(SESSION_KEY)

  if (!usuario) {
    return null
  }

  try {
    return JSON.parse(usuario) as UsuarioLogado
  } catch {
    localStorage.removeItem(SESSION_KEY)
    return null
  }
}

export function isAuthenticated(): boolean {
  return getUsuarioLogado() !== null
}