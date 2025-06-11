import React from 'react'

const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-400 border-solid"></div>
    </div>
  )
}

export default LoadingOverlay