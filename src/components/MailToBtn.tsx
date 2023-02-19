'use client'
import { mailTo } from '../utils/helpers'

export default function MailTo() {
  return (
    <button onClick={() => mailTo('joel.adving@gmail.com')} className="lg:font-thin hover:text-cyan-300 hover:underline">
      joel.adving@gmail.com
    </button>
  )
}
