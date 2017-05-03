import React from 'react';

export default ({name, min, max, level}) => {
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
    let levelDependantTop = level !== -1 ? ((level - min) * (svgConstants.levelBarWidth - svgConstants.angle) / (max - min)) + svgConstants.angle: svgConstants.angle;
    if (levelDependantTop === svgConstants.angle) levelDependantTop += svgConstants.minBar;
    const levelDependantBottom = levelDependantTop - svgConstants.angle;

    const backgroundPath = `M${svgConstants.lowBarWidth} ${svgConstants.height} L${svgConstants.angle + svgConstants.lowBarWidth} 0 H ${levelDependantTop + svgConstants.lowBarWidth} L${levelDependantBottom + svgConstants.lowBarWidth} 30 Z`
    return (
      <div className="level-bar">
        <svg width={svgConstants.levelBarWidth + svgConstants.lowBarWidth} height={svgConstants.height} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0.1" x2="1" y1="0" y2="0.15">
              <stop offset="0%" stopColor="red"/>
              <stop offset="50%" stopColor="yellow"/>
              <stop offset="100%" stopColor="green"/>
            </linearGradient>
            <clipPath id="clip">
              <path d={backgroundPath} fill="transparent"/>
            </clipPath>
          </defs>
          <rect x="0" y={svgConstants.height - svgConstants.lowBarHeight} width={svgConstants.lowBarWidth + 5} height={svgConstants.lowBarHeight} fill="red"/>
          <rect x={svgConstants.lowBarWidth} y="0" width={svgConstants.levelBarWidth} height={svgConstants.height} fill="url(#gradient)" clipPath="url(#clip)"/>
          <text x="0" y={svgConstants.height - svgConstants.lowBarHeight - 5} className="name-label">{name}</text>
          <text x={svgConstants.lowBarWidth + svgConstants.minBar * 3} y={svgConstants.height - svgConstants.lowBarHeight - 5} className="level-value">{level}</text>
        </svg>
      </div>);
  }
  return (<div></div>);
}