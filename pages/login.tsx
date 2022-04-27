import { getProviders, signIn } from 'next-auth/react'

function login({ providers }: any) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider: any) => (
        <div key={provider?.name}>
          <button className='bg-[#18D860] text-white p-5 rounded-full' onClick={() => signIn(provider?.id, {
              callbackUrl:  '/'
          })}>Login with {provider?.name} </button>
        </div>
      ))}
    </div>
  )
}

export default login

// Server side rendering, runs on the server before the login page loads
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
