<style>
  .hero {
    background-image: url('https://image.freepik.com/free-photo/stone-texture_1194-5537.jpg');
    -webkit-box-shadow: inset -10px 0px 50px -20px rgba(0,0,0,0.6);
    -moz-box-shadow: inset -10px 0px 50px -20px rgba(0,0,0,0.6);
    box-shadow: inset -10px 0px 50px -20px rgba(0,0,0,0.6)
  }
  .content span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    
  }
  .content span:nth-child(3)
  {
    transform:rotate(180deg);
  }

  .content span:nth-child(4)
  {
    transform:rotate(180deg);
  }

  .content span:before
  {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: black;
    animation: animate 4s linear infinite;
  }
  .content span:nth-child(even)::before
  {
    content: '';
    position: absolute;
    height: 100%;
    width: 4px;
    background: black;
    animation: animate-vertical 4s linear infinite;
  }
  @keyframes animate {
    0% {
      transform:scaleX(0);
      transform-origin: left;
    }
    50%
    {
      transform:scaleX(1);
      transform-origin: left;
    }
    50.1%
    {
      transform:scaleX(1);
      transform-origin: right;
      
    }
    
    100%
    {
      transform:scaleX(0);
      transform-origin: right;
      
    }
  }
    @keyframes animate-vertical {
    0% {
      transform:scaleY(0);
      transform-origin: bottom;
    }
    50%
    {
      transform:scaleY(1);
      transform-origin: bottom;
    }
    50.1%
    {
      transform:scaleY(1);
      transform-origin: top;
      
    }
    
    100%
    {
      transform:scaleY(0);
      transform-origin: top;
      
    }
  }
</style>

<div class="w-full md:sidebar hero p-8 flex items-center justify-center">
  <div class="relative border-black border-2 w-full bg-white flex flex-col content">
    <span />
    <span />
    <span />
    <span />
    <div class="font-bold text-lg flex justify-center mt-4">
      <p>Stay updated 📫</p>
    </div>
    <div class="flex justify-between p-4 text-center">
      Don't miss any tutorials, promise that I won't spam ever!
    </div>
  </div>
</div>