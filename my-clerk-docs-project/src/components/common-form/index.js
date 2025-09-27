import { Input } from "@/components/ui/input"


const CommonForm = ({action,buttonText, isBtnDisabled,formControls,buttonText, btnType,formData ,setFormData,handleFileChange }) => {


        function renderInputByComponentType(getCurrentControl) {
            let content = null;

            switch (getCurrentControl.componentTpe) {
                case "input":
                    content = <div className='relative flex items-center
                    mt-8'><Input
                        type="text"
                        name={getCurrentControl.name}
                        placeholder={getCurrentControl.placeholder}
                        id={getCurrentControl.name}
                        disabled={getCurrentControl.disabled}
                        value={formData[getCurrentControl.name]}
                            onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })}
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                    /> </div>
                    break;
                    case "file":
                        content = <Label 
                                for={getCurrentControl.name}
                                className="flex bg-gray-100 items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-md cursor-pointer"
                        >
                            <h2>{getCurrentControl.label}</h2>
                                                        <Input type="file" onChange={handleFileChange} name={getCurrentControl.name} id={getCurrentControl.name} disabled={getCurrentControl.disabled} className="mt-2"/>
                        </Label>
                    break;
                default:
                    content = <div className='relative flex items-center
                    mt-8'><Input
                        type="text"
                        name={getCurrentControl.name}
                        placeholder={getCurrentControl.placeholder}
                        id={getCurrentControl.name}
                        disabled={getCurrentControl.disabled}
                        value={formData[getCurrentControl.name]}
                            onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })}
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                    /> </div>
                    break;
            
        }
        return content;
    }

  return (
    <form action={action}>
      {
        formControls.map(control=>renderInputByComponentType(control))
      }
      <div className='mt-6 w-full'>
        <Button disabled={isBtnDisabled}
        className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
        type= {btnType || "submit"}
        >
            {buttonText}
        </Button>
      </div>
    </form>
  )
}

export default CommonForm
