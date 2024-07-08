import React from "react";
import { connect } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteUser, setDialog } from "./redux/Action";

function Dialog(props) {
    
  return (
    <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
  >
    <div class="relative flex justify-center">


    <div id="modal" 
        class="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div id="modalContent" class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                    <div class="flex items-center justify-center">
                    <MdOutlineDeleteOutline size={40} />
                    </div>

                    <div class="mt-2 text-center">
                        <h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">Delete Portfolio</h3>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this portfolio?
                        </p>
                    </div>
                </div>

            
                    <div class="mt-4 sm:flex sm:items-center sm:justify-between ">
                        <button onClick={props.handleClose}  class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                            Cancel
                        </button>

                        <button onClick={()=>props.deleteUser()} class="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:w-auto sm:mt-0 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40">
                            Delete
                        </button>
                    </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  providers: state.providers,
});
const mapDispatchToProps = {
    deleteUser,
    setDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
