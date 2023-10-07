from datetime import timedelta

def duration_to_readable(duration):
    days = duration.days
    hours, remainder = divmod(duration.seconds, 3600)
    minutes = remainder // 60

    parts = []
    if days:
        parts.append(f"{days} day{'s' if days > 1 else ''}")
    if hours:
        parts.append(f"{hours} hour{'s' if hours > 1 else ''}")
    if minutes:
        parts.append(f"{minutes} minute{'s' if minutes > 1 else ''}")

    return ' '.join(parts)

