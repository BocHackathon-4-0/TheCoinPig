from datetime import datetime
class api_timeout_obj():
    def __init__(self, timeout_datetime, payload):
        self.timeout_datetime = timeout_datetime
        self.payload = payload
    
    def expired(self):
        if datetime.now() > self.timeout_datetime:
            return True
        return False