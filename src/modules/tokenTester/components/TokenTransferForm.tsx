import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import useGetAssetList from 'hooks/useGetAssetList'
import useRequestTokenTransfer from 'hooks/useRequestTokenTransfer'

const TokenTransferForm = () => {
  const [successModal, setSuccessModal] = useState<{
    content?: React.ReactNode
    visible: boolean
  }>({ visible: false })
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const { register, handleSubmit, ...form } = useForm<{
    asset: string
    address: string
  }>()
  const { data: assetList = [] } = useGetAssetList()
  const { mutateAsync: requestTokenTransfer, isLoading } =
    useRequestTokenTransfer()

  const onSubmit = async ({
    address,
    asset,
  }: {
    asset: string
    address: string
  }) => {
    setErrorMessage(undefined)

    try {
      const data = await requestTokenTransfer({ address, asset })
      setSuccessModal({
        content: (
          <Typography color="text.primary">
            {asset} has been transfered to{' '}
            <Typography color="text.secondary" component="span">
              {address}
            </Typography>{' '}
            with txid{' '}
            <Typography color="text.secondary" component="span">
              {data.tx}
            </Typography>
          </Typography>
        ),
        visible: true,
      })
    } catch (e: any) {
      setErrorMessage(
        e?.response?.data?.message ??
          e?.response?.data?.reason ??
          'Something went wront, please check your input.'
      )
    }
  }

  return (
    <>
      <Box>
        <Typography variant="h4" mb={1}>
          Get Test Tokens
        </Typography>
        <Typography mb={4} fontWeight={500}>
          This faucet sends only Test Token on the Firo testnets and other
          parent chain. Please double check input before submit.
        </Typography>
        {errorMessage && (
          <Alert
            severity="error"
            onClose={() => setErrorMessage(undefined)}
            sx={{ mb: 3 }}
          >
            {errorMessage}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
        >
          <TextField
            label="Select Token"
            SelectProps={{
              native: true,
            }}
            {...register('asset', { required: true })}
            select
            required
            focused
          >
            <option value="">Please select Token</option>
            {assetList?.map((asset) => (
              <option key={asset?._id} value={asset?.name}>
                {asset?.name}
              </option>
            ))}
          </TextField>
          <TextField
            label="Wallet Address"
            placeholder="0xxxxxxxxxxxxxxxxxxxxxxxxxxx"
            {...register('address', { required: true })}
            required
            focused
          />
          <LoadingButton
            variant="contained"
            type="submit"
            size="large"
            loading={isLoading}
          >
            Submit
          </LoadingButton>
        </Box>
      </Box>
      <Dialog open={successModal.visible} maxWidth="sm">
        <DialogTitle>
          <Typography variant="h5">Success</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{successModal.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setSuccessModal((state) => ({ ...state, visible: false }))
              form.reset()
            }}
            variant="contained"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TokenTransferForm
