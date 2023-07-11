import React from 'react'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <div>Aboutlayout</div>
            <main>
                {children}
            </main>
        </>
  )
}
