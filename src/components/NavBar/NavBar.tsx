import React from "react"
import { Link } from "gatsby"
import styles from './NavBar.style'

export default function NavBar() {
  return <div className={styles}>
      <div className='my-auto d-flex justify-content-between w-100 px-4'>
        <div>
          <Link to="/">
            <img src='propti-logo-black.svg'/>
          </Link>
          {` `}
          <Link to="/">
            <img src='envelop.svg'></img>
          </Link>
          {` `}
          <Link to="/">077-9985041</Link>
          {` `}
        </div>

        <nav>
          <Link to="/">מועדפים</Link>
          {` `}
          <Link to="/">מחשבון שטחים</Link>
          {` `}
          <Link to="/">הוספת נכס</Link>
          {` `}
          <Link to="/">תגמול שותפים</Link>
          {` `}
          <Link to="/">קבל הצעות אישיות</Link>
          {` `}
          <Link to="/">לידים חמים</Link>
          <span>
            <button>מסחרי</button>
            <button>מגורים</button>
          </span>
        </nav>
      </div>
    </div>
}