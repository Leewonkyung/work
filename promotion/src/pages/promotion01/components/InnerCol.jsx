import classNames from 'classnames'

import styles from '../tabPackageAir.module.scss'

export default function InnerCol({ size = 'lg', children }) {
  return (
    <div className={classNames(styles['inner-col'], size === 'sm' && styles.sm)}>{children}</div>
  )
}
