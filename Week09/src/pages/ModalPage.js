import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const actionBar = (
    <div>
      <Button
        danger
        onClick={() => {
          window.alert("Danger");
        }}
      >
        Danger
      </Button>
      <Button primary onClick={handleClose}>
        Close
      </Button>
    </div>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquet nibh a purus mollis euismod. Morbi metus nisl, blandit eu
        fringilla vel, sodales id risus. Praesent mollis rutrum lorem. Ut
        bibendum vulputate erat. Ut porta elit ac nisl placerat, maximus aliquet
        magna semper. Phasellus vel tortor nulla. Maecenas libero lectus,
        iaculis id quam in, aliquam porttitor nibh. Donec egestas purus eu orci
        pretium, a efficitur metus ultrices. Nunc porttitor at tellus eu
        vestibulum. Maecenas et velit vitae ante venenatis tincidunt. Donec id
        diam id ligula pretium suscipit et vitae urna. Vestibulum tincidunt
        turpis tortor, eu porta felis sollicitudin nec. Mauris nec fringilla
        enim, ac rhoncus ante. Praesent ornare lacinia dui. Fusce nulla turpis,
        mattis ac rhoncus eget, volutpat vestibulum odio. Ut sit amet nisi eget
        leo lacinia tristique vel in neque. Mauris nisl diam, elementum non
        mattis at, ullamcorper ac sapien. Aliquam malesuada nunc vitae massa
        facilisis dictum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis in tortor lacus. Nullam eleifend
        ex non fringilla elementum. Integer ut enim pulvinar, convallis enim
        egestas, rhoncus risus. Nullam volutpat pharetra metus id euismod. Sed
        sit amet erat metus. Fusce rhoncus bibendum orci nec mattis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Cras maximus tortor mi, eu laoreet erat viverra ut. Mauris sagittis
        vel dolor sed hendrerit. Ut laoreet ac ante et semper. Ut a est felis.
        Etiam a dapibus libero. Nunc malesuada dolor in pretium hendrerit.
        Pellentesque lacinia efficitur ligula, non mattis purus porta eget.
        Aliquam venenatis nulla ex, vitae iaculis elit egestas a. Pellentesque
        vehicula justo sed viverra molestie. Phasellus nisl sapien, scelerisque
        ut mi consectetur, consequat commodo ex. Quisque maximus semper
        tristique. Vivamus scelerisque dictum turpis eget varius. Morbi a ante
        et ligula hendrerit varius. Sed finibus dignissim rutrum. Nulla eget mi
        et purus porta finibus vitae non ex. Praesent id laoreet tortor. In a
        suscipit risus. Sed mollis lacus sed condimentum egestas. Phasellus a
        lobortis mi. Ut enim lacus, volutpat nec leo nec, bibendum ultrices sem.
        Fusce ut dolor lacus. Mauris in luctus arcu, non blandit nibh.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec quis felis faucibus, congue lectus vitae,
        lobortis neque. Aliquam euismod eu turpis sed vulputate. Nunc at varius
        lorem. Aenean vel lacus tincidunt, facilisis metus ac, faucibus lacus.
        Praesent rutrum sem et arcu molestie laoreet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquet nibh a purus mollis euismod. Morbi metus nisl, blandit eu
        fringilla vel, sodales id risus. Praesent mollis rutrum lorem. Ut
        bibendum vulputate erat. Ut porta elit ac nisl placerat, maximus aliquet
        magna semper. Phasellus vel tortor nulla. Maecenas libero lectus,
        iaculis id quam in, aliquam porttitor nibh. Donec egestas purus eu orci
        pretium, a efficitur metus ultrices. Nunc porttitor at tellus eu
        vestibulum. Maecenas et velit vitae ante venenatis tincidunt. Donec id
        diam id ligula pretium suscipit et vitae urna. Vestibulum tincidunt
        turpis tortor, eu porta felis sollicitudin nec. Mauris nec fringilla
        enim, ac rhoncus ante. Praesent ornare lacinia dui. Fusce nulla turpis,
        mattis ac rhoncus eget, volutpat vestibulum odio. Ut sit amet nisi eget
        leo lacinia tristique vel in neque. Mauris nisl diam, elementum non
        mattis at, ullamcorper ac sapien. Aliquam malesuada nunc vitae massa
        facilisis dictum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis in tortor lacus. Nullam eleifend
        ex non fringilla elementum. Integer ut enim pulvinar, convallis enim
        egestas, rhoncus risus. Nullam volutpat pharetra metus id euismod. Sed
        sit amet erat metus. Fusce rhoncus bibendum orci nec mattis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Cras maximus tortor mi, eu laoreet erat viverra ut. Mauris sagittis
        vel dolor sed hendrerit. Ut laoreet ac ante et semper. Ut a est felis.
        Etiam a dapibus libero. Nunc malesuada dolor in pretium hendrerit.
        Pellentesque lacinia efficitur ligula, non mattis purus porta eget.
        Aliquam venenatis nulla ex, vitae iaculis elit egestas a. Pellentesque
        vehicula justo sed viverra molestie. Phasellus nisl sapien, scelerisque
        ut mi consectetur, consequat commodo ex. Quisque maximus semper
        tristique. Vivamus scelerisque dictum turpis eget varius. Morbi a ante
        et ligula hendrerit varius. Sed finibus dignissim rutrum. Nulla eget mi
        et purus porta finibus vitae non ex. Praesent id laoreet tortor. In a
        suscipit risus. Sed mollis lacus sed condimentum egestas. Phasellus a
        lobortis mi. Ut enim lacus, volutpat nec leo nec, bibendum ultrices sem.
        Fusce ut dolor lacus. Mauris in luctus arcu, non blandit nibh.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec quis felis faucibus, congue lectus vitae,
        lobortis neque. Aliquam euismod eu turpis sed vulputate. Nunc at varius
        lorem. Aenean vel lacus tincidunt, facilisis metus ac, faucibus lacus.
        Praesent rutrum sem et arcu molestie laoreet.
      </p>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquet nibh a purus mollis euismod. Morbi metus nisl, blandit eu
        fringilla vel, sodales id risus. Praesent mollis rutrum lorem. Ut
        bibendum vulputate erat. Ut porta elit ac nisl placerat, maximus aliquet
        magna semper. Phasellus vel tortor nulla. Maecenas libero lectus,
        iaculis id quam in, aliquam porttitor nibh. Donec egestas purus eu orci
        pretium, a efficitur metus ultrices. Nunc porttitor at tellus eu
        vestibulum. Maecenas et velit vitae ante venenatis tincidunt. Donec id
        diam id ligula pretium suscipit et vitae urna. Vestibulum tincidunt
        turpis tortor, eu porta felis sollicitudin nec. Mauris nec fringilla
        enim, ac rhoncus ante. Praesent ornare lacinia dui. Fusce nulla turpis,
        mattis ac rhoncus eget, volutpat vestibulum odio. Ut sit amet nisi eget
        leo lacinia tristique vel in neque. Mauris nisl diam, elementum non
        mattis at, ullamcorper ac sapien. Aliquam malesuada nunc vitae massa
        facilisis dictum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis in tortor lacus. Nullam eleifend
        ex non fringilla elementum. Integer ut enim pulvinar, convallis enim
        egestas, rhoncus risus. Nullam volutpat pharetra metus id euismod. Sed
        sit amet erat metus. Fusce rhoncus bibendum orci nec mattis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Cras maximus tortor mi, eu laoreet erat viverra ut. Mauris sagittis
        vel dolor sed hendrerit. Ut laoreet ac ante et semper. Ut a est felis.
        Etiam a dapibus libero. Nunc malesuada dolor in pretium hendrerit.
        Pellentesque lacinia efficitur ligula, non mattis purus porta eget.
        Aliquam venenatis nulla ex, vitae iaculis elit egestas a. Pellentesque
        vehicula justo sed viverra molestie. Phasellus nisl sapien, scelerisque
        ut mi consectetur, consequat commodo ex. Quisque maximus semper
        tristique. Vivamus scelerisque dictum turpis eget varius. Morbi a ante
        et ligula hendrerit varius. Sed finibus dignissim rutrum. Nulla eget mi
        et purus porta finibus vitae non ex. Praesent id laoreet tortor. In a
        suscipit risus. Sed mollis lacus sed condimentum egestas. Phasellus a
        lobortis mi. Ut enim lacus, volutpat nec leo nec, bibendum ultrices sem.
        Fusce ut dolor lacus. Mauris in luctus arcu, non blandit nibh.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Donec quis felis faucibus, congue lectus vitae,
        lobortis neque. Aliquam euismod eu turpis sed vulputate. Nunc at varius
        lorem. Aenean vel lacus tincidunt, facilisis metus ac, faucibus lacus.
        Praesent rutrum sem et arcu molestie laoreet.
      </p>
      <Button outline success onClick={handleClick}>
        Open Modal
      </Button>
      <div className="relative">
        {isModalOpen && (
          <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Modal Content</p>
          </Modal>
        )}
      </div>
    </div>
  );
}
