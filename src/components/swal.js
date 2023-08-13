import Swal from 'sweetalert2'

export default function SweetAlert(type, message, icon, loc, callback) {
    switch (type) {
        default:
        case "notif":
            Swal.fire({
                position: 'center',
                icon: icon,
                title: message,
                showConfirmButton: false,
                timer: 3000
            });
            break;
        case "question":
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success button-swal',
                    cancelButton: 'btn btn-danger button-swal'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true,
                closeOnConfirm: false,
                closeOnCancel: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        position: 'center',
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                    })
                    callback(result?.value)
                    window.location = loc;
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        position: 'center',
                        icon: "error",
                        title: "Operation Cancelled",
                        showConfirmButton: false,
                    })
                }
            })
    }
}