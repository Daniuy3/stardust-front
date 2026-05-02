import { TextButton } from '@/components/Button';
import { Skeleton, styled, TableCell, TableRow } from '@mui/material';
import React from 'react'
import { SlLocationPin } from 'react-icons/sl';
import { TbDots } from 'react-icons/tb';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const TableLoader = () => {
  return (
    <StyledTableRow >
        <TableCell align="center">
            <div className='flex gap-2'>
                <Skeleton variant="circular" width={35} height={35} />
                <div>
                    <Skeleton variant="text" width={100} height={20} />
                    <Skeleton variant="text" width={150} height={15} />
                </div>
            </div>
        </TableCell>

        <TableCell>
            <Skeleton variant="text" width={80} height={30} />
        </TableCell>

        <TableCell>
            <Skeleton variant="text" width={60} height={30} />
        </TableCell>

        <TableCell>
            <Skeleton variant="text" width={80} height={20} />
        </TableCell>

        <TableCell>
            <div className='flex gap-2 items-center'>
                <SlLocationPin size={16} className='text-gray-500'/>
                <Skeleton  variant="text" width={70} height={20} />
            </div>
        </TableCell>

        <TableCell>
            <Skeleton variant="text" width={80} height={20} />
        </TableCell>

        <TableCell>
            <TextButton>
                <TbDots size={18} />
            </TextButton>
        </TableCell>
        
    </StyledTableRow>
  )
}
