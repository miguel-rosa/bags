import users from '../../data/users'

const getUserById = async (id: string): Promise<User | undefined> =>
  await new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTimeout(() => { resolve(users.find((user) => user.id === id)) }, 250)
  })

export {
  getUserById
}
