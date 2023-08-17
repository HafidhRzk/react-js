import Swal from 'sweetalert2'

export default function SweetAlert({ type, message, icon, loc, callback }) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success button-swal',
            cancelButton: 'btn btn-danger button-swal'
        },
        buttonsStyling: false
    })

    switch (type) {
        default:
        case "notif":
            Swal.fire({
                position: 'center',
                icon: icon,
                title: message,
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                if (loc) {
                    window.location = loc;
                }
            })
            break;
        case "question":
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        position: 'center',
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        callback?.(result?.value)
                        if (loc) {
                            window.location = loc;
                        }
                    })
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