import React from 'react';

export default ({name, min, max, level, unit}) => {
  min = parseFloat(min);
  max = parseFloat(max);
  level = parseFloat(level);
  const svgConstants = {
    lowBarWidth: 130,
    lowBarHeight: 5,
    levelBarWidth: 150,
    height: 30,
    angle: 25,
    minBar: 10
  }
  if (!isNaN(level)) {
    const fullBarWidth = svgConstants.levelBarWidth + svgConstants.lowBarWidth;
    let levelDependantTop = level !== -1 ? ((level - min) * (svgConstants.levelBarWidth - svgConstants.angle) / (max - min)) + svgConstants.angle: svgConstants.angle;
    if (levelDependantTop <= svgConstants.angle + svgConstants.minBar) levelDependantTop = svgConstants.angle + svgConstants.minBar
    const levelDependantBottom = levelDependantTop - svgConstants.angle;

    const backgroundPath = `M${svgConstants.lowBarWidth} ${svgConstants.height} L${svgConstants.angle + svgConstants.lowBarWidth} 0 H ${levelDependantTop + svgConstants.lowBarWidth} L${levelDependantBottom + svgConstants.lowBarWidth} 30 Z`
    const fullPath = `M${svgConstants.angle + svgConstants.lowBarWidth} 0 H ${fullBarWidth} L${fullBarWidth - svgConstants.angle} 30 L${svgConstants.lowBarWidth} ${svgConstants.height}`
    return (
      <div className="level-bar">
        <svg width={fullBarWidth} height={svgConstants.height} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0.1" x2="1" y1="0" y2="0.15">
              <stop offset="0%" stopColor="red"/>
              <stop offset="50%" stopColor="yellow"/>
              <stop offset="100%" stopColor="green"/>
            </linearGradient>
            <clipPath id="clip">
              <path d={backgroundPath} fill="transparent"/>
            </clipPath>
            <filter id="background">
              <feGaussianBlur in="StrokePaint" stdDeviation="3" />
            </filter>
          </defs>
          <rect x="0" y={svgConstants.height - svgConstants.lowBarHeight} width={svgConstants.lowBarWidth + 5} height={svgConstants.lowBarHeight} fill="red"/>
          <rect x={svgConstants.lowBarWidth} y="0" width={svgConstants.levelBarWidth} height={svgConstants.height} fill="url(#gradient)" clipPath="url(#clip)"/>
          <path d={fullPath} fill="black" opacity="0.1"/>
          <path d={fullPath} stroke="black" strokeWidth="2" fill="transparent" filter="url(#background)"/>
          <text x="0" y={svgConstants.height - svgConstants.lowBarHeight - 5} className="name-label">{name}</text>
          <text x={svgConstants.lowBarWidth + svgConstants.minBar * 3} y={svgConstants.height - svgConstants.lowBarHeight - 5} className="level-value">{level}{unit}</text>
        </svg>
      </div>);
  }
  return (<div></div>);
}