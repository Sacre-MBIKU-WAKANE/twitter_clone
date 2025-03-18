import vine from '@vinejs/vine'

export const registerAuthValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3),
    password: vine.string().minLength(4),
    email: vine.string().email(),
  })
)

export const loginAuthValidator = vine.compile(
  vine.object({
    password: vine.string().minLength(4),
    email: vine.string().email(),
  })
)
