

import { TextButton } from '@/components/Button'
import React from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import { BsAward } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { FiActivity } from 'react-icons/fi'
import { IoDocumentText } from 'react-icons/io5'


interface ActivityItemProps {
    label: string
    type: "auth" | "course" | "task" | "certificate" | "other"
    date: string | Date
}


const ActivityItem = ({ label, type, date }: ActivityItemProps) => {
    
    const getIcon = () => {
        switch(type) {
            case "auth":
                return <BiLogInCircle size={20} />
            case "course":
                return <FaGraduationCap  size={20} />
            case "task":
                return <IoDocumentText  size={20} />
            case "certificate":
                return <BsAward size={20} />
            default:
                return <FiActivity size={20} />
        }
    }

    const getColors = (): React.CSSProperties => {
        switch(type) {
            case "auth":
                return { backgroundColor: '#d1fae5', color: '#16a34a' }
            case "course":
                return { backgroundColor: '#dbeafe', color: '#2563eb' }
            case "task":
                return { backgroundColor: '#fef3c7', color: '#ca8a04' }
            case "certificate":
                return { backgroundColor: '#f3e8ff', color: '#7c3aed' }
            default:
                return { backgroundColor: '#f3f4f6', color: '#4b5563' }
        }
    }

    return (
        <div className='flex gap-2 border-t border-gray-300 pt-2 items-center'>
            <div
                className='h-10 w-10 rounded-sm flex items-center justify-center' 
                style={{...getColors() }}>
                {getIcon()}
            </div>
            <div>
                <p className='font-semibold'>{label}</p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{new Date(date).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

interface Props {
    items?: ActivityItemProps[]
}

export const Activity = ({ items = [] } : Props) => {
  return (
    <div style={{ border: '1px solid #d1d5db', borderRadius: '0.75rem', padding: '1.25rem', paddingBottom: 0, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiActivity  size={20} /> 
            Actividad Reciente
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {
                items.length > 0 && (
                    items.slice(0,3).map((item, index) => (
                        <ActivityItem key={index} {...item} />
                    ))
                ) 
            }
            {
                items.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#6b7280', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
                        Sin actividad reciente
                    </div>
                )
            }
        </div>

        <div style={{ marginTop: '1.25rem' }}>
            <TextButton style={{ width: '100%' }}>
                Ver toda la actividad
            </TextButton>
        </div>
    </div>
  )
}
