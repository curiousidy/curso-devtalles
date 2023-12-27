'use client'
import React, { useEffect } from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppDispatch, useAppSelector } from '@/store';
import { initCounterState } from '@/store/counter/counterSlice';

export const WidgetsGrid = () => {
const count = useAppSelector(state => state.counter.count);
const dispatch = useAppDispatch();

useEffect(() => {
    dispatch(initCounterState(count)); 
     
   }, [dispatch,count]);
   
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">    
      <SimpleWidget 
        title={count.toString()}
        subTitle='productos en carrito de compras'
        href='/dashboard/counter'
        
    />
      {/* <SimpleWidget
        title='Tarjeta2'
        subTitle='descripción tarjeta2'
        href='www.xataka.com'
      /> */}
    </div>
  )
}
