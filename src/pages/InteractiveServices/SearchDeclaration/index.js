import React, {useState} from 'react';
import SearchDeclarationDebt from "./SearchDeclarationDebt";
import SearchDeclarationDebtView from "./SearchDeclarationDebtView";

import {toast} from "react-toastify";
import {request} from "../../../utils/request";

const SearchDeclaration = () => {
    const [declorationType, setDeclorationType] = useState("INN");
    const [tin, setTin] = useState("");
    const [declorationNumber, setDeclorationNumber] = useState({
        postNum: "",
        declarationDate: "",
        num: ""
    });
    const [declorationResponse, setDeclorationResponse] = useState(undefined);

    const getDeclorationByTin = () => {
        request({
            url: 'currency/search-by-tin/' + tin,
            method: "get",
        }).then(response => {
            console.log(response)
            setDeclorationResponse(response.data)
        })
    }
    const getDeclorationByCertficate = () => {
        request({
            url: 'currency/search-by-dec',
            method: "post",
            data: declorationNumber
        }).then(response => {
            console.log(response)
            setDeclorationResponse(response.data)
        })
    }
    const updateG9TinByDecId = invoiceId => {
        request({
            url: 'currency/update/' + invoiceId,
            method: "get",

        }).then(response => {
            const data = response.data.data;
            if (response.data.success) {
                this.setState({ loading: false });
                toast.success("Deklaratsiya muvaffaqiyatli jo'natildi");
            } else {
                this.setState({ loading: false });
                toast.error("Jo'natishda xatolik");
            }
        })

    };
  const  resend = invoiceId => {
      request({
          url:'api/currency/resend/' + invoiceId,
          method: "get",

      }).then(response => {
          const data = response.data.data;
          if (response.data.success) {
              this.setState({ loading: false });
              toast.success("Deklaratsiya muvaffaqiyatli jo'natildi");
          } else {
              this.setState({ loading: false });
              toast.error("Jo'natishda xatolik");
          }
      })
    };
    return (
        <div>
            {/*<SearchDeclarationDebt declorationType={declorationType} setDeclorationType={setDeclorationType} setTin={setTin} tin={tin} getDeclorationByTin={getDeclorationByTin}/>*/}

            <SearchDeclarationDebtView declorationType={declorationType} setDeclorationType={setDeclorationType}
                                       setTin={setTin} tin={tin} getDeclorationByTin={getDeclorationByTin}
                                       setDeclorationNumber={setDeclorationNumber} declorationNumber={declorationNumber}
                                       getDeclorationByCertficate={getDeclorationByCertficate}
                                       declorationResponse={declorationResponse}
                                       updateG9TinByDecId={updateG9TinByDecId}
                                       resend={resend}
            />

        </div>
    );
};

export default SearchDeclaration;
