"use client"

import { courses } from '@/data/courses-example';
import { Tab, Tabs as MUItabs, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import { CourseCard } from './CourseCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}
export const Tabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
    <div className='flex h-full min-h-0 w-full flex-col '>
        <div className='flex overflow-x-auto justify-between border-b border-gray-300'>
            <MUItabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example" 
                textColor='secondary' 
                indicatorColor='secondary'
            >
                <Tab label="En progreso"  />
                <Tab label="Completados"  />
            </MUItabs>

            <div className='items-center gap-2 min-w-52 hidden sm:flex'>
                <p className='text-gray-500 w-32'>
                    Ordenar por
                </p>

                <FormControl fullWidth size='small' color='secondary'>
                    <InputLabel id="demo-simple-select-label"> Todos </InputLabel>
                    <Select
                        color='secondary'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Todos"
                    >
                        <MenuItem value={10}>Recientes</MenuItem>
                        <MenuItem value={20}>Archivados</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

        <div className='min-h-0 h-full lg:h-auto flex-1 overflow-y-auto py-5'>
            <CustomTabPanel value={value} index={0}>
                <div className='grid sm:grid-cols-2 gap-5'>
                        {
                            courses.map((course) => (
                                <CourseCard course={course} key={course.id} />
                            ))
                        }
                </div>
            </CustomTabPanel>
        </div>
    </div>
  )
}
