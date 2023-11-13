import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';

const LeftSidebar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess])

  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
        <Link to="/" className='flex gap-3 items-center'>
          <img 
            src='/assets/images/logo2.svg'
            alt='logo'
            width={170}
            height={36}
          />
        </Link>

        <Link to={'/profile/${user.id}'} className='flex gap-3 items-center'>
          <img 
            src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
            alt='profile'
          />
        </Link>
      </div>
    </nav>
  )
}

export default LeftSidebar