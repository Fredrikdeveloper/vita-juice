import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { useCart } from 'react-use-cart';
import { GetFunc } from '../../module/api';
import "../errorModal/RespModal.css"


const ResponsiveModal = ({ elId }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [filterProduct, setFilterProduct] = useState([])


  useEffect(() => {
    GetFunc("/products").then(data => {
      const res = data.find(Product => Product.id === elId)
      setFilterProduct(res)
    })
  }, [])



  const { addItem, getItem, removeItem } = useCart();

  return (
    <>
      <MenuItem onClick={handleClickOpen}>
      узнать больше
      </MenuItem>
      <Dialog className='modal-main-body'
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className='modal-main-body' id="responsive-dialog-title" >
          {<div className="modal-icon">
            <i onClick={() => handleClose()} class="fa-solid fa-light fa-xmark fa-2x"></i>
          </div>}
        </DialogTitle>
        <DialogContent className='modal-main-body'>
          <div className="modal-img">
            <img className='img-fluid' src={filterProduct.url} alt="error" />
          </div>
          <DialogContentText data-aos="fade-down" data-aos-duration="500" >
            <div className="modal-body">
              <div className="modal-text">
                <h3>{filterProduct.name}</h3>
                <h1>{filterProduct.description}</h1>
                <h2>{filterProduct.price}₽</h2>
                <div className="product-button">
                  {!getItem(filterProduct.id) ? (
                    <button className="add-zakaz" onClick={() => addItem(filterProduct)}>
                      добавить в корзину
                    </button>
                  ) : (
                    <button
                      className="delete-zakaz"
                      onClick={() => removeItem(filterProduct.id)}
                    >
                      удалить из корзину
                    </button>
                  )}
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </>
  )
}

export default ResponsiveModal