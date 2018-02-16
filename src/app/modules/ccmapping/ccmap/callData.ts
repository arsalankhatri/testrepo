
export class callData {
    data: iData;
  
    public initData(xdata) {
      if (xdata) {
        
        this.data = JSON.parse(xdata);
      }
      else {
        let rdata = {
          id: 0,
          object: '',
          phone1: '',
          priority1: 1,
          phone2: '',
          priority2: 2,
          phone3: '',
          priority3: 3,
        }
        this.data = rdata;
      }
  
      return this.data;
  
    }
  }