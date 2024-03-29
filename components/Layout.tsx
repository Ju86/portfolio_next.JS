import { useRouter } from 'next/router'
import { SwitchTransition, Transition } from 'react-transition-group'
import gsap from 'gsap'
import Header from './Header'

const Layout = ({ children }: any) => {
  const router = useRouter()
  

  const onPageEnter = (element: gsap.TweenTarget) => {
    gsap.fromTo(
      element,
      {
        y: 50,
        autoAlpha: 0,
        ease: 'power.out',
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power.out',
      }
    )
  }

  const onPageExit = (element: gsap.TweenTarget) => {
    gsap.fromTo(
      element,
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power.out',
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power.inOut',
      }
    )
  }
  return (
    <>
      <Header />
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={onPageEnter}
          onExit={onPageExit}
          mountOnEnter={true}
          unmountOnExit={true}>
          <main className='p-4 mx-auto max-w-4xl'>{children}</main>
        </Transition>
      </SwitchTransition>
    </>
  )
}

export default Layout