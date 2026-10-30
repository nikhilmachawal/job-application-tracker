const StatusBadge = ({ status }) => {
  const badgeClass = `status-badge status-${status.toLowerCase()}`

  return (
    <span className={badgeClass}>
      {status}  
    </span>
  )
}

export default StatusBadge
