import { auth } from '@/auth';
import Breadcrubms from '@/components/breadcrumbs/Breadcrubms';
import CheckoutForm from '@/components/payment/CheckoutForm';
import OrderSummary from '@/components/payment/OrderSummary';
import { redirect } from 'next/navigation';

const CheckoutPage = async () => {
  const session = await auth();

  if (!session) redirect('/login');
  return (
    <>
      <Breadcrubms />
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <CheckoutForm />
        </div>

        <div className="col-span-4 border border-gray-200 p-4 rounded">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
